import React from 'react';
							
export default class ViewDisplayComponent extends React.Component {
	constructor() {
		super();
		this.state={comment:''};
		this.deleteNews=this.deleteNews.bind(this);
		this.updateNews=this.updateNews.bind(this);
		this.changeValue=this.changeValue.bind(this);
	}

	deleteNews() {
		$.ajax({
			url: "http://localhost:8081/news/delete",
			type: "DELETE",
			data :this.props.viewElement,

			success : function(msg) {
				console.log('news deleted')
			},
			error: function(err) {
				console.log('error');
			}
		});
	} 

	updateNews() {
		console.log(this.props.viewElement.title+this.state.comment);
		$.ajax({
			url: "http://localhost:8081/news/update",
			type: "PUT",
			data:'title='+this.props.viewElement.title+'&Comment='+this.state.comment,

			success : function(msg) {
				console.log('comments UPDATED')
			},
			error: function(err) {
				console.log('error');
			}
		});
	}    

	changeValue(event) {
		var commentValue = event.target.value;
		this.setState({comment:commentValue});
		console.log(commentValue);
	}

	render() {
		var newsId = this.props.viewElement._id;
		var modalRef = "#" + newsId;
		console.log("View Display Component");
							
		return (
			<div className="container">
				<div className = "row jumbotron">
					<article className="col-md-4">
						<img src="newsPic col-md-4" src={this.props.viewElement.urlToImage} alt="image" width="200" height="200" />
					</article>

					<article className="col-md-8" >
						<h3><a href={this.props.viewElement.url} target="_blank">{this.props.viewElement.title}</a></h3>
						<h6>{this.props.viewElement.publishedAt}</h6>
						<p>{this.props.viewElement.description}</p>
						<a href={this.props.viewElement.url} role="button" target="_blank">...more</a>
						<br/>
						<br/>

						<a href={modalRef} role="button" data-toggle="modal" type="button" className="btn btn-primary" onClick={this.updateNews}>Update</a>


						<div className="modal fade" id={newsId}>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<button className="close" data-dismiss="modal">X</button>
										<h4>Add your Comments</h4>		
									</div>
									<div className="modal-body">
										<div className="container">
											<div className = "row jumbotron">

												<article className="col-sm-12">

													<article className="col-sm-6">
														<img src="newsPic " src={this.props.viewElement.urlToImage} alt="image" width="200" height="200" />
													</article>

													<article className="col-sm-6" >
														<h3><a href="#" >{this.props.viewElement.title}</a></h3>

														<p>{this.props.viewElement.description}</p>
													</article>

												</article>

												<form className="form-horizontal">
													<div className="form-group">
														<label className="col-lg-2 control-label" for="comment_input">Comment</label>
														<div className="col-lg-10">
															<input type="text"  id="commentid"  placeholder="Enter Comment" onChange={this.changeValue} />
														</div>
													</div>
												</form>

											</div>

											<div className="modal-footer">
												<button className="btn btn-primary" type="button" data-dismiss="modal" onClick={this.updateNews} >Save Comments</button>

												<button className="btn btn-success" type="button" data-dismiss="modal" >Close</button>

											</div> 
										</div>
									</div>    
								</div>
							</div>
						</div>


						<button className="btn btn-primary" type="button" onClick={this.deleteNews}>Delete</button>
					</article>


					<p>{this.state.comment}</p>

				</div>
			</div>
		);
	}
};