<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	pageContext.setAttribute("basePath", basePath);
%>
<!-- combo test -->
<!--   <% 
// 	String bookName = request.getParameter("searchAllBook");
// 	String book1 = "['JAVA1'],['JAVA2']";
// 	String book2 = "['EXT1'],['EXT2']";
// 	String books = "";
	
// 	if("allBook".equals(bookName)) {
// 		books = "[" + book1 + "," +book2 +"]";
// 		response.getWriter().write(books);
// 		return;
// 	} else {
// 		books = "Nothing"; 
// 		response.getWriter().write(books);
// 	}
	%>-->
	
<!-- 	filefield test -->
<%@page import="java.util.List"%>
<%@ page import="org.apache.commons.fileupload.*" %>
<%
	DiskFileUpload upload = new DiskFileUpload();
	upload.setHeaderEncoding("UTF-8");
	List items = upload.parseRequest(HttpServletRequest);
	
%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" type="text/css" href="<%=path %>/ext/resources/css/ext-all.css" /> 
<script type="text/javascript" src="<%=path %>/ext/bootstrap.js"></script>
<script type="text/javascript" src="<%=path %>/ext/locale/ext-lang-zh_CN.js"></script>

<script type="text/javascript" src="<%=path %>/js/hello.js"></script>

<title>Extjs4.2 Learning</title>
</head>
<body>
Hi,Extjs4.2!

牛大率
</body>
</html>
