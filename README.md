Simple drag and drop with Angular 1.x
====

> Modified from the angular-drag-and-drop-lists [examples page](http://marceljuenemann.github.io/angular-drag-and-drop-lists/demo/#/simple)

### Markup

```
<div class="row">
	<div ng-repeat="(listName, list) in models.lists" class="col-md-6">
		<ul dnd-list="list">
    		<li ng-repeat="item in list" 
    			dnd-draggable="item" 
    			dnd-moved="list.splice($index, 1)" 
    			dnd-effect-allowed="move" 
    			dnd-selected="models.selected = item" 
    			ng-class="{'selected': models.selected === item}" 
    			draggable="true">{{item.label}}</li>
		</ul>
	</div>
</div>
```

### Angular

```
var app = angular.module('angular-starter', [
	'ui.router',
	'dndLists'
]);

app.controller('MainCtrl', function($scope){

    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
});
```