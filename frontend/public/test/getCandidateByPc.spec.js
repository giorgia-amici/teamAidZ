describe('Controllers', function() {
  beforeEach(module('QanMP'));

  var ctrl, scope;

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('getCandidateByPc', {$scope: scope});
  }));

  describe('getCandidateByPc', function(){
  	it('is a controller', function(){
  		expect(ctrl).toBeDefined();
  		expect(scope).toBeDefined();
  	})

		// it('party is a defined object', function(){
		// 	expect(scope.party).not.toBeUndefined();
		// 	// console.log(scope.party)
		// });

		// it('has a name', function(){
		// 	expect(scope.party.name).toBe('Giorgia');
		// });

		// it('has an organizer', function(){
		// 	expect(scope.party.organizer).toBe('IDUNNO');
		// });

		// it('has a date', function(){
		// 	expect(scope.party.location).toBe('London');
		// });

		// it('has a venue date', function(){
		// 	expect(scope.party.date).toBe('1/1/2013');
		// });
  // })
});