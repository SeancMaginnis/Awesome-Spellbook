import SpellService from "./spellService.js";

let _ss = new SpellService()

function drawSpellApi() {
    let template = ''
    _ss.SpellsApi.forEach(s => {
        template += `
        <li onclick="app.controllers.spellController.getDetails('${s.url}')">${s.name}</li>
        `
    })
    document.querySelector('#api-spells').innerHTML = template
}

function drawActiveSpell() {
    document.querySelector('#active-spell').innerHTML = _ss.ActiveSpell.getTemplate()
}

function drawSpellbook() {
    let template = ''
    _ss.MySpellBook.forEach(s => {
        template += `
        <li onclick="app.controllers.spellController.showDetails('${s._id}')">${s.name}</li>
        `
    })
    document.querySelector('#my-spellbook').innerHTML = template
}



export default class SpellController {
    constructor() {
        _ss.addSubscriber('spellsApi', drawSpellApi)
        _ss.addSubscriber('activeSpell', drawActiveSpell)
        _ss.addSubscriber('mySpellBook', drawSpellbook)
        _ss.getMySpellBook()
        _ss.getSpellData()
    }

    getDetails(url) {
        _ss.getDetails(url)
    }

    showDetails(id) {
        _ss.showDetails(id)
    }

    addSpell() {
        _ss.addSpell()
    }
    //     deleteSpell() {
    //         _ss.deleteSpell()
    //     }
}