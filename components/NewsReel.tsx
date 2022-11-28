import { useEffect, useState } from "react";
import { styled } from "../stitches.config";
import { NewsReelItemI } from "../types";
import { Block } from "./Block";
import { Button, Container, Text } from "../components";
import { FaNewspaper } from "react-icons/fa";
import { useFirestore } from "../hooks";
import { NewsReelItems } from "../utils/data";

interface Props {
  newsItems: NewsReelItemI[];
}

export const NewsReel = ({ newsItems = [] }: Props) => {
  const [selected, setSelected] = useState<NewsReelItemI>(() => {
    if (newsItems.length === 0) {
      return NewsReelItems[0];
    }
    return newsItems[0];
  });

  useEffect(() => {
    const skip = () => {
      if (newsItems.length > 1) {
        setSelected((prev) => {
          if (newsItems.indexOf(prev) === newsItems.length - 1) {
            return newsItems[0];
          } else {
            return newsItems[newsItems.indexOf(prev) + 1];
          }
        });
      }
    };

    const interval = setInterval(skip, 5000);

    return () => clearInterval(interval);
  }, [newsItems]);

  return (
    <>
      <Wrapper
        css={{
          background: `linear-gradient(to right, 
            rgba(0,0,0,95),
            rgba(0,0,0,0.6),
            rgba(0,0,0,0.1)),
            url(${
              selected.image || "/images/LT.jpg"
            }) no-repeat center center/cover`,
        }}
      >
        <Container css={{ height: "100%" }}>
          <Block
            dFlex
            direction="column"
            justify="between"
            css={{ height: "100%" }}
          >
            <NewsText>
              <Text color="blanc" size={3}>
                {selected.title}
              </Text>
              <Text color="blanc" className="truncate-3">
                {selected.summary}
              </Text>
              <Button css={{ marginTop: "$2" }}>
                <Block dFlex align="center" gap="1">
                  Read more <FaNewspaper />
                </Block>
              </Button>
            </NewsText>

            <ScrollContainer className="scrollbar-hidden">
              <Block dFlex gap="2">
                {newsItems.map((item, idx) => (
                  <NewsItemCard
                    css={{
                      background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${item.image}) no-repeat center center/cover`,
                    }}
                    onClick={() => setSelected(item)}
                    key={idx}
                    selected={item.title === selected.title}
                  >
                    <NewsItemInner className="truncate-3">
                      {item.title}
                    </NewsItemInner>
                  </NewsItemCard>
                ))}
              </Block>
            </ScrollContainer>
          </Block>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled("div", {
  height: 400,
  width: "100%",
  color: "White",
});

const NewsItemCard = styled("div", {
  width: "8rem",
  height: "9rem",
  padding: "$1",
  flexShrink: 0,
  color: "green",
  borderRadius: 5,
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",

  "&:hover > div": {
    opacity: 0.8,
    transform: "translate(0)",
  },

  variants: {
    selected: {
      true: {
        opacity: 1,
        transform: "translate(-5px, -10px)",
      },
    },
  },
});

const NewsItemInner = styled("div", {
  position: "absolute",
  width: "90%",
  height: "90%",
  backgroundColor: "black",
  color: "white",
  borderRadius: 5,
  padding: "$1",
  transition: "all 0.25s ease-in",
  transform: "translate(120%, 120%)",
  opacity: 0,
});

const ScrollContainer = styled("div", {
  display: "flex",
  overflowX: "auto",
  width: "fit-content",
  marginLeft: "auto",
  padding: "$2",
  maxWidth: "100%",
});

const NewsText = styled("div", {
  maxWidth: "100%",

  "@sm": {
    maxWidth: "70%",
  },
  "@lg": {
    maxWidth: "60%",
  },
});
