---
to: <% if(have_hooks) { %><%= abs_path %>/<%= h.changeCase.pascal(component_name) %>.hook.ts<% } else { %>null<% } %>
---
export const use<%= h.changeCase.pascal(component_name) %> = () => {
  return {}
};
