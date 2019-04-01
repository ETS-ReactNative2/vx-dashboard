/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Label } from 'reactstrap';
import { WithContext as ReactTags } from 'react-tag-input';

// eslint-disable-next-line react/prefer-stateless-function

// const suggestions = COUNTRIES.map(country => ({
//   id: country,
//   text: country,
// }));

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
class Tags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [
        { id: 'GROWING', text: 'GROWING' },
        { id: 'bigSize', text: 'BIG SIZE' },
      ],
      suggestions: [
        { id: 'GROWING', text: 'GROWING' },
        { id: 'GROWING2', text: 'GROWING2' },
      ],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  handleTagClick(index) {
    console.log(`The tag at index ${index} was clicked`);
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div className="tags-input">
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          handleTagClick={this.handleTagClick}
        />
      </div>
    );
  }
}

Tags.propTypes = {};

export default Tags;
