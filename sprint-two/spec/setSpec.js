describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it ('should add values of type number', function() {
    set.add(8)
    set.add(9)
    expect(set.contains(8)).to.equal(true)
    expect(set.contains(9)).to.equal(true)
    expect(set.contains('8')).to.equal(false)
    expect(set.contains('9')).to.equal(false)
  })

   it ('should add values of any type', function() {
    var arr = [1,2,3]
    var obj = {'key':5}
    set.add(arr)
    set.add(obj)
    expect(set.contains(arr)).to.equal(true)
    expect(set.contains(obj)).to.equal(true)
    //expect(set.contains([1,2,3])).to.equal(false)
  })

});
