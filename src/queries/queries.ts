import { gql } from '@apollo/client';

export const GET_ALL_PEOPLE = gql`
  query GetAllPeople {
    getAllPeople {
      count
      next
      previous
      results {
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld
        url
      }
    }
  }
`;

export const GET_NEXT_PREV = gql`
  query getNextPrevPage($url: String!) {
    getNextPrevPage(url: $url) {
      count
      next
      previous
      results {
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld
        url
      }
    }
  }
`;
export const GET_PERSON = gql`
  query GetPerson($getPersonId: ID!) {
    getPerson(id: $getPersonId) {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld
      url
    }
  }
`;

export const GET_SEARCH = gql`
  query SearchPerson($name: String!) {
    searchPerson(name: $name) {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      url
      homeworld
      gender
      birth_year
    }
  }
`;
