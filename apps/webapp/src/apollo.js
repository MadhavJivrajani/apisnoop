import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';

const GQL_ENDPOINT = 'http://147.75.84.193:8080/v1/graphql'

export default new ApolloClient({ uri: GQL_ENDPOINT, fetch: fetch });
