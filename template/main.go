package <% if (cli) { %>main<% } else { %><%= name %><% } %>

func Add(a int, b int) int {
	return a + b
}
<% if (cli) { %>
func main() {
	c := Add(1, 2)
	println(c)
}
<% } %>
