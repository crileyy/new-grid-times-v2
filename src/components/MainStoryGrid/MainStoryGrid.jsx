import React from 'react';
import styled from 'styled-components';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionsStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionsStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 32px;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 152px 193px;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-rows: 1fr 152px;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  
  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: -16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    margin-right: -16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const OpinionsStoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > a {
    padding: 16px 0;
  }
  
  & > a:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
  }

  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;

    & > a:not(:last-of-type) {
      padding: 0;
      border-bottom: none;
    }
  }
`;

const SecondaryStoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > a {
    padding: 16px 0;
  }
  
  & > a:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    margin-top: -16px;
    border-top: 1px solid var(--color-gray-300);
  }
`;

export default MainStoryGrid;
