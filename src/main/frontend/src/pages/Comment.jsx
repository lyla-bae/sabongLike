import React, {useEffect, useState} from "react";
import axios from "axios";

const Comment = ({postId}) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    // const [msg, setMsg] = useState("");
    const [add, setAdd] = useState(false)

    useEffect(() => {
        axios.get(`/api/comment/list/${postId}`)
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                }
            });
    }, [add]);

    const handleAddComment = () => {
        axios.post(`/api/comment/add/${postId}`, {content: newComment}).then((res) => {
            setComments([...comments, res.data]);
            setNewComment("");
            // setAdd(!add)
        });
    };

    return (
        <section className="comment_wrap">
            <h3>댓글</h3>
            <div className="write_wrap">
                <textarea
                    name="textrea_comment"
                    id="textrea_comment"
                    placeholder="댓글을 작성해주세요."
                    onChange={(e) => setNewComment(e.target.value)}
                    value={newComment}
                    style={{width: "100%", resize: "none"}}
                />
                <button className="btn_register" onClick={handleAddComment}>
                    등록
                </button>
            </div>
            <ul className="list_wrap">
                {comments.length==0 ? (
                    <p>등록된 댓글이 없습니다.</p>
                ) : (
                    comments.map((comment) => (
                        <li key={comment.id}>
                            <strong>{comment.content}</strong>
                            <p>
                                <span className="date">{comment.create_at}</span>
                                <span className="name">{comment.username}</span>
                            </p>
                        </li>
                    ))
                )}
            </ul>
        </section>
    );
};

export default Comment;