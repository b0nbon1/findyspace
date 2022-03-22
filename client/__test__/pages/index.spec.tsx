import renderer from 'react-test-renderer';
import Home from '../../pages';

it('renders homepage unchanged', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
