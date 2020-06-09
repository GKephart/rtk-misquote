import React from "react"

export const Home = () => {
  return (
    <>
      <div className="container">
        <form className='py-3'>
          <h2>Create Misquote</h2>
          <hr/>
          <div className="form-group">
            <label htmlFor="misquote">Misquote</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"/>
              </div>
              <input type="text" name="misquote" id="misquote" className="form-control"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="attribution">Attribution</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"/>
              </div>
              <input type="text" name="attribution" id="attribution" className="form-control"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="submitter">Submitter</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"/>
              </div>
              <input type="text" name="submitter" id="submitter" className="form-control"/>
            </div>
          </div>
          <button type="submit" className="btn btn-info btn-lg"> Misquote</button>
          <button type="reset" className="btn btn-warning btn-lg">Cancel</button>
        </form>

        <h2 className="pt-3">All Misquotes</h2>
        <hr/>
        <table className="table table-bordered table-fluid table-striped table-word-wrap">
          <tr>
            <th>Misquote</th>
            <th>Attribution</th>
            <th>Submitter</th>
            <th>Edit</th>
          </tr>
          <tr>

            <td>Misquote content</td>
            <td>Misquote Attribution</td>
            <td>Misquote Submitter</td>
            <td>
              <button className="btn btn-outline-primary">Edit Misquote</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}