import {MyPipe} from "./my-pipe";
/**
 * Created by oa on 2/17/2017.
 */
//As the name implies, the beforeEach function is called once before each spec in the describe in which it is called, and the afterEach function is called once after each spec.
describe('my pipe tests ',()=>
{
let pipe:MyPipe;

  beforeEach(
    ()=>
    {
      pipe=new MyPipe();
    }
  );


  it('should capitalize all words in a string',()=>
  {
    var result=pipe.transform('golden retriever',null);
    expect(result).toEqual('Golden Retriever');
  });




}




)
