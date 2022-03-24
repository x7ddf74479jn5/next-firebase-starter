---
to: <%= abs_path %>/<%= file_name %>.tsx
---
<% if (have_props && is_SG) { -%>
import type {<%= TGetStaticPaths %> CustomNextPage, GetStaticProps, InferGetStaticPropsType } from "next";
<% } else if (have_props && is_SSR) { -%>
import type {<%= TGetStaticPaths %> CustomNextPage, GetServerSideProps, InferGetServerSidePropsType } from "next";
<% } else if (!have_props) { -%>
import type {<%= TGetStaticPaths %> CustomNextPage } from "next";
<% } -%>
<% if (is_dynamic) { -%>
import type { ParsedUrlQuery } from "node:querystring";
<% } -%>
<% if (have_hooks) { -%>

import { use<%= h.changeCase.pascal(page_name) %> } from './<%= h.changeCase.pascal(page_name) %>.hook'
<% } -%>

<% if (have_props && is_SG) { -%>
type Props = InferGetStaticPropsType<typeof getStaticProps>;
<% } else  if (have_props && is_SSR) { -%>
type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
<% } -%>

const <%= h.changeCase.pascal(page_name) %>: <%- type_annotate %> = () => {
<% if (have_hooks) { -%>
  const hook = use<%= h.changeCase.pascal(page_name) %>();

<% } -%>
  return <<%= h.changeCase.pascal(page_name) %> />
}

// <%= h.changeCase.pascal(page_name) %>.getLayout = 
<% if (is_dynamic) { -%>
interface Params extends ParsedUrlQuery {
  <%= slug %>?: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = [];

  return { paths, fallback: "blocking" };
};
<% } -%>

<% if (have_props && is_SG) { -%>
type StaticProps = {

};
<% } else if (have_props && is_SSR) { -%>
type ServerSideProps = {

};
<% } -%>

<% if (have_props && is_SG) { -%>
export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  return {
    props: {

    },
<% } else if (have_props && is_SSR) { -%>
export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
  return {
    props: {

    },
<% } -%>
<% if (is_ISR) { -%>
  //  revalidate: ,
<% } -%>
<% if (have_props) { -%>
  };
};
<% } -%>

export default <%= h.changeCase.pascal(page_name) %>;

