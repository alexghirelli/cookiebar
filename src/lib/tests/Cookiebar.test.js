import Cookiebar from '../Cookiebar';

beforeEach(() => {

})
it('renders without crashing', () => {
  let target = document.body

  console.log(target)
  let el = '<div></div>';

  expect(new Cookiebar().insertBefore()).toHaveBeenCalledWith(target, el);
});