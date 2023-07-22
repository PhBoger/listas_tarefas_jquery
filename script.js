$(document).ready(function() {

    function addTask(task) {
        $('#taskList').append('<li>' + task + '</li>');
    }


    $('#taskForm').submit(function(e) {
        e.preventDefault();
        const taskInput = $('#taskInput');
        const task = taskInput.val().trim();

        if (task !== '') {
            addTask(task);
            taskInput.val('');
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
