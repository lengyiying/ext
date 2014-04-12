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
	});
	
	var msg = {
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
	Ext.TaskManager.start(task);
	
	Ext.Msg.prompt("title",'<font color=red>hello</font>',showid,this,true,"hi");
	function showid(id,msg) {
		alert(id+":"+msg);
	}
	
	//Ext.Msg.wait('please wait for a while','title',{text:'saving...'});
	
	var p = Ext.create('Ext.ProgressBar', {
	   renderTo: Ext.getBody(),
	   width: 300
	});

	p.wait({
	    interval: 500, //bar will move fast!
	    duration: 5000,
	    increment: 10,
	    text: 'Updating...',
	    scope: this,
	    fn: function(){
	        p.updateText('Done!');
	    }
	});
	var enableBtn = Ext.create('Ext.Button', {
	    text: 'Enable',
	    renderTo: Ext.getBody(),
	    handler: function() {
	    	//disableBtn.disable();
	    	enableBtn.enable();
	    	text.enable();
	    	//toolbar.enable();
	    }
	});
	
	var disableBtn = Ext.create('Ext.Button', {
	    text: 'Disable',
	    renderTo: Ext.getBody(),
	    handler: function() {
	    	//enableBtn.disable();
	    	disableBtn.enable();
	    	text.disable();
	    	//toolbar.disable();
	    }
	});
	
	var text = Ext.create('Ext.form.field.Text',{
		 xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Name',
        allowBlank: false 
	});
	
	var toolbar = Ext.create('Ext.toolbar.Toolbar', {
	    renderTo: document.body,
	    width   : 400,
	    margin  : '5 0 0 0',
	    items   : [enableBtn, disableBtn,text,menu]
	});
	
	
	var createMenu = Ext.create('Ext.menu.Menu', {
	    width: 800,
	    margin: '0 0 10 0',
	    floating: false,  // usually you want this set to True (default)
	    renderTo: Ext.getBody(),  // usually rendered by it's containing component
	    items: [{
	        		text: 'create'
	        	},{
	        		text:'save'
	        	}
        	]
	});
	
	var editMenu = Ext.create('Ext.menu.Menu', {
	    width: 800,
	    margin: '0 0 10 0',
	    floating: false,  // usually you want this set to True (default)
	    renderTo: Ext.getBody(),  // usually rendered by it's containing component
	    items: [{
	        		text: 'modify'
	        	}
        	]
	});
	
	var toolbar = Ext.create('Ext.toolbar.Toolbar',{
		renderTo: document.body,
	    width   : 400,
	    margin  : '5 0 0 0',
	    items   : [{text:'file',menu:createMenu},
	    			{text:'edit',menu:editMenu}]
	});*/
	
	Ext.create('Ext.form.Panel',{
		title:'Info',
		width:800,
		items:[
		{
			xtype:'textfield',
			name:'name',
			fieldLabel:'Your name',
			allowblank:false,
			blankText:'not allow blank',
			msgTarget:'under'
		},{
			xtype:'textfield',
			name:'number',
			fieldLabel:'Your Number',
			inputType:'password',
			allowblank:false
		},{
			xtype:'radiogroup',
			
			fieldLabel:'Sex',
			items:[{
				boxLabel:'Men',
				name:'sex',
				inputValue:'M'
			},{
				boxLabel:'Women',
				name:'sex',
				inputValue:'W'
			}
			]
			
		},{
			xtype:'checkboxgroup',
			
			fieldLabel:'Books',
			items:[{
				boxLabel:'Spring',
				name:'books',
			inputValue:'SPRING'
			},{
				boxLabel:'Unix',
				name:'books',
			inputValue:'UNIX'
			}
			]
			
		},{
			xtype:'triggerfield',
			fieldLabel:'BeCool',
			emptyText:'click me',
			onTriggerClick: function() {
        		Ext.Msg.alert('Status', 'You clicked my trigger!');
   			 }
		},{
			xtype: 'numberfield',
	        anchor: '100%',
	        name: 'score',
	        fieldLabel: 'Score',
	        allowDecimals:false,
	        allowBlank:false,
	        //labelWdith:10,
	        //width:10,
	        value: 0,
	        maxValue: 100,
	        minValue: 0
		}
		],
		buttons:[{
			xtype:'button',
			text:'save',
			handler:function(btn){
				//Ext.Msg.alert('hi',btn.getText());
				//Ext.Msg.alert('hi',this.up('form').getForm().findField('name').getValue()+ "-"+this.up('form').getForm().findField('number').getValue());
				var array = this.up('form').getForm().findField('books');
				Ext.each(array,function(value){
					console.log(value);
				});
				Ext.Msg.alert('hi',this.up('form').getForm().findField('books').inputValue+ "-"+this.up('form').getForm().findField('number').getValue());
			}
		},{
			xtype:'button',
			text:'cancel',
			handler:function(){
				this.up('form').getForm().reset();
			}
		}],
		renderTo:Ext.getBody()
	});
});

