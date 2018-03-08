var list;
beforeEach(function () {
  console.log("new list created")
  list = new List()
});

describe('List', function(){
  it('list is a defined object', function(){
    // var list = new List();
    expect(typeof list).not().toBe("undefined")
  });
  it('initializes with a notes property as an empty array', function(){
    //var list = new List();
    expect(list._notes.length).toBe(0)
  })
});

describe('addNote', function(){
  it('adds a note to the list', function(){
    //var list = new List();
    list.addNote("test");
    expect(list._notes[0].returnString()).toBe("test")
  })
});

describe('printNotes', function(){
  it('returns all notes', function(){
    //var list = new List();
    var note = new Note("test");
    var a = [];
    list._notes.push(note);
    expect(list.printNotes()).toMatchArray([note])
  })
});

describe('test', function() {
  
  it('has a list', function() {
    try {
      expect(typeof list).toBe("undefined")
    } catch(err) {
      document.write(err)
      document.write(err.stack)
    }
  })
});
