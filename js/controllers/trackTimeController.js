app.controller('trackTimeController', function ($scope, Api, $stateParams) {

    Api.post('time_entries.json/' + $stateParams.id, {
        project_id: '',
        hours: '10',
        time_entry: '20'
        // spent_on: '',
        // activity_id: '',
        // comments: ''


    });
    console.log('hi')
});
