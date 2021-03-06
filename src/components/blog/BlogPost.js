import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { BlogTitle, VisibilityWrapper } from "./Blog.styles";
import { Spring } from "react-spring/renderprops";
import { Typography, List, Card } from "antd";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";

const { Title } = Typography;

export default function BlogPost({ data, showPagination }) {
    return (
        <>
            <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                    <BlogTitle>
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? "translateY(0)"
                                    : "translateY(100px)",
                            }}
                        >
                            {(styles) => (
                                <Title
                                    style={{ ...styles, fontWeight: "bold" }}
                                    level={4}
                                >
                                    {data.blogSectionTitle}
                                </Title>
                            )}
                        </Spring>
                    </BlogTitle>
                )}
            </VisibilitySensor>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 2,
                    xl: 4,
                    xxl: 4,
                }}
                pagination={
                    showPagination
                        ? {
                              pageSize: 6,
                          }
                        : false
                }
                style={{ marginBottom: 100 }}
                dataSource={data.blogs}
                renderItem={(item, i) => (
                    <VisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <VisibilityWrapper>
                                <Spring
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? "translateY(0)"
                                            : "translateY(100px)",
                                    }}
                                    delay={i * 100}
                                >
                                    {(styles) => (
                                        <List.Item
                                            style={{
                                                ...styles,
                                                marginTop: 15,
                                            }}
                                        >
                                            <Card
                                                style={{
                                                    width: 300,
                                                    margin: "0 auto",
                                                }}
                                                cover={
                                                    <AniLink
                                                        fade
                                                        to={`/blog/${item.slug}`}
                                                    >
                                                        <Img
                                                            fluid={
                                                                item.heroImage
                                                                    .fluid
                                                            }
                                                            alt={item.title}
                                                        />
                                                    </AniLink>
                                                }
                                                hoverable
                                            >
                                                <AniLink
                                                    fade
                                                    to={`/blog/${item.slug}`}
                                                >
                                                    <Card.Meta
                                                        className="custom-card-meta"
                                                        title={item.title}
                                                        description={
                                                            item
                                                                .childContentfulBlogPostDescriptionTextNode
                                                                .description
                                                        }
                                                    />
                                                </AniLink>
                                            </Card>
                                        </List.Item>
                                    )}
                                </Spring>
                            </VisibilityWrapper>
                        )}
                    </VisibilitySensor>
                )}
            />
        </>
    );
}
