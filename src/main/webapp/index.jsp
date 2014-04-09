<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	pageContext.setAttribute("basePath", basePath);
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
</body>
</html>