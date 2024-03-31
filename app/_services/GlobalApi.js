import request, { gql } from "graphql-request"

const MASTER_URL='https://api-ap-south-1.hygraph.com/v2/'+process.env.NEXT_PUBLIC_URL_KEY+'/master'


const getCategory = async () => {
    const query = gql`
    query getCategories {
        categories {
          name
          icon {
            url
          }
          bgcolor {
            hex
          }
        }
      }
    `
    const result = await request(MASTER_URL, query)
    return result
}


const getBusinessList = async () => {
  const query = gql`
  query BusinessList {
    businessLists {
      about
      address
      contactPerson
      email
      id
      name
      images {
        url
      }
      category {
        name
      }
    }
  }
  `
  const result = await request(MASTER_URL, query)
  return result
}

const getBusinessListByCategory = async (category) => {
  const query = gql`
  query getBusinessListByCategory {
    businessLists(where: {category: {name: "`+category+`"}}) {
      name
      email
      contactPerson
      address
      images {
        url
      }
      about
      id
      category {
        name
      }
    }
  }
  `
  const result = await request(MASTER_URL, query)
  return result
}

export default {
    getCategory,
    getBusinessList,
    getBusinessListByCategory
}