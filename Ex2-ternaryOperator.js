let user=prompt('Enter:');
let message;
let isEmployee=user=='Employee';
let isDirector=user=='Director';
let isNull=user==null;
let result=(isEmployee?(message='hello'):
    (isDirector?(message='Greetings'):
        (isNull?(message='No login'):(message=''))))

alert(message)