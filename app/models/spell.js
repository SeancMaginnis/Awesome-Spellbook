export default class Spell {
  constructor(data) {
    this._id = data._id || data.id
    this.name = data.name
    this.description = data.desc || data.description
    this.duration = data.duration
    this.level = data.level
    this.index = data.index
    this.url = data.url
    this.range = data.range
  }
  getTemplate() {
    return `
        <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">${this.name}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Level: ${this.level} -- Duration: ${this.duration}</h6>
                              <p class="card-text">${this.description}</p>
                              <p class="card-text">Index: ${this.index}</p>
                              <button class="btn btn-danger" onclick="app.controllers.spellController.addSpell()">Add to Spellbook</button>
                            </div>
                          </div>
        `
  }
}