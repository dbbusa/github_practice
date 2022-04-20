import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './App.css'
import { useState} from 'react';

function Post(props) {

  const [Pname, setPName] = useState('');
  const [Pdescription , setPDescription] = useState('')
  const Pdate = new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
  const [PUrl, setPUrl] = useState('')

  function addFile(event) {
    const file = event.target.files[0];
    setPUrl(URL.createObjectURL(file));
  }

  function handlePName(e){
    e.preventDefault();
    setPName(e.target.value);
  }
  
  function handlePDescription(e){
    e.preventDefault();
    setPDescription(e.target.value);
  }

  let [Posts , SetPosts] = useState([])
  let [Likes , SetLikes] = useState([])

  let data = {
    Name : Pname,
    Description : Pdescription,
    Date : Pdate,
    Url : PUrl
  }

  function submit(){
    let oldPosts = Posts;
    oldPosts.push(data);
    SetPosts([...oldPosts])
    console.log(Posts)
  }

  
  
  
  var x = Posts.map((items)=>{
    return(
       <div key={items} className="mb-3">
         <div className="card" style={{width : "18rem"}}>
                 <img className="card-img-top" alt="Card image cap" src={items.Url} />
                 <div className="card-body">
                   <h5 className="card-title">{items.Name}</h5>
                   <small className="text-secondary fw-bold">{items.Date}</small>
                   <p className="card-text">{items.Description}</p>
                   <em class="cursor-auto fa fa-heart" onClick={() => likePost(items)}></em>
                 </div>
               </div>
       </div>
    )
  })

  function likePost(item){
    let oldLikes = Likes;
    oldLikes.push(item);
    SetLikes([...oldLikes])
    console.log(Likes)
    props.postNotify(Likes)
  }
  
  return (
  
    <div className="conatiner">
      <h4 className="text-center text-uppercase text-secondary">New Post</h4>
      <div className="mb-3 input-group">
        <span className="input-group-text">Post Name</span>
        <input type="text" className="form-control" placeholder="Post Name" value={Pname}  onChange={handlePName} />
      </div>
      <div className="mb-3 input-group">
        <span className="input-group-text">Post Description</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          value={Pdescription}
          onChange={handlePDescription}
        ></textarea>
      </div>
      <div className="mb-3 input-group">
        <span className="input-group-text">Post Date</span>
        <input
          type="text"
          className="form-control"
          placeholder="Post Date"
          readOnly={true}
          value = {Pdate}
        />
      </div>
      <div className="mb-3">
        <label for="formFile" className="form-label">
          Select Post Image
        </label>
        <input className="form-control" type="file" id="formFile" onChange={addFile}  />
      </div>
      <button className="mb-3 btn btn-primary" onClick={submit}>Submit</button> 
      {x}
    </div>
   
  );
}

function App() {

  const [PostList, setPostList] = useState([]);
  function handlePost(Posts){
    setPostList(Posts);
  }

  const [isOpened, setIsOpened] = useState(false)
 function show(){
  setIsOpened(true);
  }
  
  
  return (
    <div>
      <div className="container pt-4 mt-5">
        <h3 className="text-center text-uppercase">Day7 Assignment</h3> <hr />
        <div className="row">
          <div className="col-md-6">
            <a className="mb-3 btn btn-primary" onClick={show}>Click to Show {PostList.length} Like  Post</a>
            <div className="mb-3">
              <div>
                { isOpened && (
                  PostList.map((item)=>{
                    return(
                       <div key={item} className="mb-3"> 
                         <div className="card" style={{width : "18rem"}}>
                                 <img className="card-img-top" alt="Card image cap" src={item.Url} />
                                 <div className="card-body">
                                   <h5 className="card-title">{item.Name}</h5>
                                   <small className="text-secondary fw-bold">{item.Date}</small>
                                   <p className="card-text">{item.Description}</p>
                                 </div>
                               </div>
                       </div>
                    )
                  })
                )                 
                }
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Post postNotify={handlePost}></Post>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
