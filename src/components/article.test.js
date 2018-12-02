import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../fixtures'
import Article from './article'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should render article', () => {
    const container = shallow(<Article article={articles[0]} />)
    expect(container.find('.test__article--element'))
  })

  it('should render comments', () => {
    const container = mount(
      <Article article={articles[0]} isOpen={true} toggleOpen={() => () => {}} />
    )

    expect(container.find('.test__comment--body').length).toEqual(0)

    container
      .find('.test__comment--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment--body').length).toEqual(articles[0].comments.length)
  })

  it('should render open article', () => {
    const container = mount(
      <Article article={articles[0]} isOpen={true} toggleOpen={() => () => {}} />
    )

    expect(container.find('.test__article--body').length).toEqual(1)
  })
})
