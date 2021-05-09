import React from 'react';

class AddComments extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     comment: '',
  //   };
  // }

  inputComment = e => {
    e.preventDefault();
    const { getComment } = this.props;
    getComment(e.target.value);
  };

  render() {
    const { addComment } = this.props;
    return (
      <form className="addComments" onSubmit={addComment}>
        <input type="text" className="typeBar" onChange={this.inputComment} />
        <button type="submit" className="change post">
          게시
        </button>
      </form>
    );
  }
}

export default AddComments;
