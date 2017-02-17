import {MyService} from "./my-service";
/**
 * Created by oa on 2/17/2017.
 */

describe('my service tests', ()=>
{
  let service:MyService=new MyService();
it('should return a list of dogs',()=>
  {
    var items=service.getDogs(3);
    expect(items).toEqual(['golden retriever', 'french bulldog', 'german shepherd']);


  });

it('should get all dogs available',()=>
{
var items=service.getDogs(100);
  expect(items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier', 'boxer', 'chow chow', 'pug', 'akita', 'corgi', 'labrador']);


}
);




});
