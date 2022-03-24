---
to: <% if(have_hooks) { %><%= abs_path %>/<%= h.changeCase.pascal(page_name) %>.hook.ts<% } else { %>null<% } %>
---
export const use<%= h.changeCase.pascal(page_name) %> = () => {
  return {}
};

