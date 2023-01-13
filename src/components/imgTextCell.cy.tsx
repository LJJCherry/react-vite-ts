import ImgTextCell from './ImgTextCell';

const data = {
  title: '标题',
  source: '来源',
  commentNum: 100,
  time: ' 2021-05-19 19:46:53',
  imgSrc: 'https://inews.gtimg.com/newsapp_bt/0/1214211816570_3299/0',
};
describe('<Stepper />', () => {
  it('renders', () => {
    cy.mount(<ImgTextCell data={data}/>);
  })
})