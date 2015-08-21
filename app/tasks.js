var observableModule = require("data/observable");
var observableArray = require("data/observable-array");
var viewModule = require("ui/core/view");

var tasks = new observableArray.ObservableArray([]);
var pageData = new observableModule.Observable();
var id = 0;
var page;

exports.onPageLoaded = function (args) {
	page = args.object;
	pageData.set("task", "");
	pageData.set("tasks", tasks);
	page.bindingContext = pageData;
};

exports.add = function (args) {
	tasks.push({
		name: pageData.get("task")
	});
	pageData.set("task", "");
	viewModule.getViewById(page, "task").dismissSoftInput();
};

exports.remove = function (args) {

	var index = args.index;

	console.log('index', index);

	if(index > -1) {
		tasks.splice(index, 1);
	}

};