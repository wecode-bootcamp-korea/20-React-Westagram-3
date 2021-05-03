import React from 'react';

class AddComments extends React.Component {
  constructor() {
    super();

    this.state = {
      comment: '',
    };
  }

  inputComment = e => {
    // this.setState({
    //   comment: e.target.value,
    // });
    this.props.getComment(e.target.value);

    console.log(e.target.value);
  };

  render() {
    const { addComment } = this.props;
    return (
      <form className="replyBar" onSubmit={addComment}>
        <input type="text" className="typeBar" onChange={this.inputComment} />
        <button type="submit" className="change post">
          게시
        </button>
      </form>
    );
  }
}

export default AddComments;
