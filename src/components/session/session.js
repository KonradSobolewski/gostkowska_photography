import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FlexCenterContainer } from "../../style/common";
import Footer from "../footer/footer";
import { StandardSection } from "./standardSection";
import { WidtherSection } from "./widtherSection";


const InnnerContainer = styled(FlexCenterContainer)`
  flex-direction: column;
`;

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const getImagesSection = (params) => {
  let images = null;
  switch (params.sessionId) {
    case "1":
      images = importAll(
        require.context("../../assets/session1", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3, 3, 1], true);
    case "2":
      images = importAll(
        require.context("../../assets/session2", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3], false);
    case "3":
      images = importAll(
        require.context("../../assets/session3", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images, [3], false);
    default:
      images = importAll(
        require.context("../../assets/session2", false, /\.(png|jpe?g|svg)$/)
      );
      return section(images);
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
  const display = Object.keys(images).map((key) => images[key].default);
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
