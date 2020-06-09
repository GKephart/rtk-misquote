import React from 'react'

export function DetailedMisquote () {
  return (
    <>
      <div className="container">
        <h1>Misquote Misquote Id</h1>
        <blockquote>
          <p>Misquote Paragraph </p>
          <footer>
            misquote attribution <cite>added by misquote submitter </cite>
          </footer>
        </blockquote>
        <form name="misquoteForm" id="misquoteForm" className="form-horizontal well">
          <h2>Edit Misquote</h2>
          <hr/>
          <div className="form-group">
            <label htmlFor="misquote">Misquote</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> </span>
              </div>
              <input type="text" name="misquote" id="misquote" className="form-control"/>
            </div>

          </div>
          <div className="form-group">
            <label htmlFor="attribution">Attribution</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> </span>
              </div>
              <input type="text" name="attribution" id="attribution" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="submitter">Submitter</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> </span>
              </div>
              <input type=" text" name=" submitter" id=" submitter" className="
                form-control"/>
            </div>
          </div>
          <button type="submit" className="btn btn-info btn-lg"> Misquote</button>
          <button type="reset" className="btn btn-warning btn-lg">Cancel</button>
          <button type="delete" className="btn btn-danger btn-lg">Delete</button>
        </form>
      </div>
    </>
  )
}