class List {
  constructor () {
    this.items = [
      {
        text: 'Take out trash',
        isDone: false
      }
    ]
    this.getItems = () => this.items
    this.addItem = item => {
      this.items.push(item)
    }
    this.updateItem = text => {
      this.items.forEach(item => {
        if (item.text === text) {
          item.isDone = !item.isDone
        }
      })
    }
    this.deleteItem = text => {
      this.items = this.items.filter(item => {
        if (item.text === text) {
          return false
        } else {
          return true
        }
      })
    }
  }
}

module.exports = List
