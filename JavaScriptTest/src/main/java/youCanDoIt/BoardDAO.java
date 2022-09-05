package youCanDoIt;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO extends DAO {
	
	//싱글톤
		private static BoardDAO bd = new BoardDAO();
		
		private BoardDAO() {
			
		}
		
		public static BoardDAO getInstance() {
			return bd;
		}

	public List<Board> getBoardList() {
		
		String sql = "select * from tbl_board";
		List<Board> list = new ArrayList<>();
		conn();
		
		try {
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				Board brd = new Board();
				brd.setBno(rs.getInt("bno"));
				brd.setTitle(rs.getString("title"));
				brd.setContent(rs.getString("content"));
				list.add(brd);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	public boolean deleteBoard(int bno) {

		return false;
	}

	public boolean insertBoard(Board board) {

		return false;
	}
	
	// 글 등록 메소드
		public int Createbrd(Board board) {
			int result = 0;
			try {
				conn();
				String sql = "insert into tbl_board (bno, title, "
						+ "content, writer, creation_date) values (?,?,?,?,to_char(sysdate))";
				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, board.getBno());
				pstmt.setString(2, board.getTitle());
				pstmt.setString(3, board.getContent());
				pstmt.setString(4, board.getWriter());
				
				result = pstmt.executeUpdate();
				
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				disconnect();
			}
			return result;
		}
		
	
		
		// 글 삭제하기
				public boolean delBoard(int bno) {
					String sql = "delete from tbl_board where bno=?";
				conn();
				try {
					pstmt=conn.prepareStatement(sql);
					pstmt.setInt(1, bno);

					int r = pstmt.executeUpdate();
					if (r > 0) {
						return true;
					}
				} catch (SQLException e) {

					e.printStackTrace();

				} finally {
					disconnect();
				}
				return false; // 정상처리 안된 경우.
			}
		
		
	// 전체 게시글을 반환하는 메소드.
	public List<Board> getBoards() {
		List<Board> list = new ArrayList<>();
		
		conn();
		try {
			pstmt=conn.prepareStatement("select bno,title,content,writer,to_char(creation_date) from tbl_board");
			rs=pstmt.executeQuery();
			while(rs.next()) {
			Board brd = new Board();
			
			brd.setBno(rs.getInt("bno"));
			brd.setTitle(rs.getString("title"));
			brd.setContent(rs.getString("content"));
			brd.setWriter(rs.getString("writer"));
			brd.setCreationDate(rs.getString("to_char(creation_date)"));
			//brd.setCreationDate(rs.getString("to_char(creation_date)"));
			list.add(brd);

		}
	} catch (SQLException e) {
		e.printStackTrace();
	} finally {
		disconnect();
	}
	return list;
} // end of getBoards();
}
