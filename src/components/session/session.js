import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FlexCenterContainer, Colors } from "../../style/common";
import Footer from "../footer/footer";
import { StandardSection } from "./standardSection";
import { WidtherSection } from "./widtherSection";

const InnnerContainer = styled(FlexCenterContainer)`
  flex-direction: column;
  background: ${Colors.obsidian};
`;

function importAll(r) {
  return r.keys().map(r);
}

const getImagesSection = (params) => {
  let images = null;
  switch (params.sessionId) {
    case "6":
      images = importAll(
        require.context("../../assets/session1", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3], true);
    case "2":
      images = importAll(
        require.context("../../assets/session2", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3], false);
    case "5":
      images = importAll(
        require.context("../../assets/session3", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3], true);
    case "3":
      images = importAll(
        require.context("../../assets/session4", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3], false);
    case "1":
      images = importAll(
        require.context("../../assets/session5", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3, 2, 1, 3, 3, 1, 3, 1, 3 ], false);
    case "4":
      images = importAll(
        require.context("../../assets/session6", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3, 3, 2, 1 ], false);
    case "7":
      images = importAll(
        require.context("../../assets/session7", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3, 3, 3, 1, 2 , 3], true);
    default:
      images = importAll(
        require.context("../../assets/session1", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3], false);
  }
};

function partition(array, format, index) {
  return array.length
    ? [array.splice(0, format[index] ? format[index] : format.at(-1))].concat(
        partition(array, format, index + 1)
      )
    : [];
}

const section = (images, format, isNotEqual) => {
  const display = Object.keys(images).map((key) => images[key]);
  return partition(display, format, 0).map((imagePartition, index) =>
    isNotEqual ? (
      <WidtherSection
        images={imagePartition}
        key={index}
        direction={index % 2 === 0}
      />
    ) : (
      <StandardSection
        images={imagePartition}
        key={index}
        direction={index % 2 === 0}
      />
    )
  );
};

const Session = () => {
  const params = useParams();
  const display = getImagesSection(params);
  return (
    <div>
      <InnnerContainer>{display}</InnnerContainer>
      <Footer />
    </div>
  );
};

export default Session;
