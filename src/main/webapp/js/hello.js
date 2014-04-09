Ext.onReady(function(){
	/*Ext.Msg.alert("hello","hello world!");
	var person ={
		name:'Niuly',
		age:20,
		sex:'women',
		books:[
			{name:'Js',price:30},
			{name:'Spring',price:25}]
	};
	
	Ext.Msg.alert("name",person.name);
	Ext.Msg.alert("age",person.age);
	Ext.Array.each(person.books,function(book,index){
		Ext.Msg.alert("person info",person.name + person.age + book.name + book.price);
	});*/
	
	/*var msg = {
		title: 'Address',
	    msg: 'Please enter your address:',
	    width: 300,
	    buttons: Ext.Msg.OKCANCEL,
	    //multiline: true,
	    //fn: saveAddress,
	    //animateTarget: 'addAddressBtn',
	    icon: Ext.window.MessageBox.INFO,
	    progress:true
	};
	
	var box = Ext.Msg.show(msg);
	//box.updateProgress();
	
	var count = 0;
	var percent = 0;
	var progressText = '';
	var task = {
		run:function() {
			count++;
			percent=count/100;
			progressText='process:'+percent*100+'%';
			box.updateProgress(percent,progressText,'Time:'+Ext.util.Format.date(new Date(),'Y-m-d g:i:s A'));
			
			if(count > 100) {
				Ext.TaskManager.stop(task);
				box.hide();
			}
		},
		interval:100
	};
	Ext.TaskManager.start(task);*/
	
	/*Ext.Msg.prompt("title",'<font color=red>hello</font>',showid,this,true,"hi");
	function showid(id,msg) {
		alert(id+":"+msg);
	}*/
	
	//Ext.Msg.wait('please wait for a while','title',{text:'saving...'});
	
	var progressBar = new Ext.ProgressBar({
		width:300,
		renderTo:'progressBar'
	});
	progressBar.wait({
		duration:10000,
		interval:1000,
		increment:10
	});
	
});