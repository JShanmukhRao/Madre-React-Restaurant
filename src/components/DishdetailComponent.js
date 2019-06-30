import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    
    renderDish(selectedDish) {
        if (selectedDish != null) {
            console.log(`selectedDish: ${selectedDish.name}`);
            console.log(`author fisrt comment: ${selectedDish.comments[0].author}`);
            return (

                <div key={selectedDish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderComments(selectedDish) {

        if (selectedDish != null) {
            const renderedComments = selectedDish.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            }); 
            return renderedComments;

        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const selectedDish = this.renderDish(this.props.selectedDish);
        const commentOfselectedDish = this.renderComments(this.props.selectedDish);

        if (this.props.selectedDish != null) {
            return (
                <div className="row">
                    {selectedDish}
                    <div className="col-12 col-md-5 m-1" >
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {commentOfselectedDish}
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

}

export default Dishdetail;