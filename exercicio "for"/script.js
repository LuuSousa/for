
let p = document.getElementById('contacts')
let input = document.getElementById("myinput")

const contacts = [
    { name: 'Luciana', number: '(81)9849-4206' },
    { name: 'Frederico', number: '(81)9 0000-0000' },
    { name: 'Mariazinha', number: '(81)9 1111-1111' },
    { name: 'Felipe', number: '(81)9 2222-2222' },
]

function search() {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Contato encontrado ${contacts[i].name} Tel: ${contacts[i].number}`

            break
        } else {
            p.innerHTML = "Contato não encontrado , tente novamente "
        }

    }
}