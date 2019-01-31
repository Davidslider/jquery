//step one: collect input from input tag
//step two: we need to add funtionality to the button when clicked/
$('button').on('click', createSkill)
//step three: Once button clicked we need to create a skill element with a delete button
function createSkill() {
    const $skill = $('input').val()
    if (!$skill) {
        alert('You need to add a new grocery item!')
    } else {
        const $listItem = $(`<p><span>X</span> | ${$skill}</p>`)


        //step four: once skill is created we need to append the DOM 
        $('h1').after($listItem)
        $('input').val('')
        $('span').on('click', function () {
            $(this).closest('p').remove()
        })
    }
} 