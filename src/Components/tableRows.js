const TableRow = ({name, description, url}) => {
    return ( 
    <tr>
        <th>
          {name}
        </th>
        <th>
          {description}
        </th>
        <th>
          <a href={url}> 
            <p>
              A1
            </p>
          </a>
        </th>
    </tr> 
    );
}
 
export default TableRow;