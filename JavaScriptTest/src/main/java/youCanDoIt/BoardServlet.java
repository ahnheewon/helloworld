package youCanDoIt;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/board")
public class BoardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public BoardServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		BoardDAO dao = BoardDAO.getInstance();
		List<Board> list = dao.getBoards();
		// [{},{},{},{"memberId": "user1", "memberPw":1234, "memberName": "홍길동", "memberRole":1}]
		String json = "[";
		for(int i=0; i<list.size(); i++) {
			json+="{\"bno\": \""+list.get(i).getBno() + "\", \"title\": \""+list.get(i).getTitle()+"\", \"content\": \""+list.get(i).getContent()
					+"\", \"writer\": \""+list.get(i).getWriter()+"\", \"creation_date\": \""+list.get(i).getCreationDate()+"\""+"}";
			if (i != list.size() - 1) {
				json += ",";
			}

		}
		json += "]";
		response.getWriter().print(json); // 웹페이지에 json 형태 데이터를 그려줌.
	}
		// 조회의 기능 구현.


	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");

		
String job = request.getParameter("job"); // 삭제해야돼서 파라미터 하나 더 추가!
		
		if(job.equals("insert")) {
			
		Board brd =  new Board();
		brd.setBno(Integer.parseInt(request.getParameter("bno")));
		brd.setTitle(request.getParameter("title"));
		brd.setContent(request.getParameter("content"));
		brd.setWriter(request.getParameter("writer"));
		brd.setCreationDate(request.getParameter("creation_date"));
		BoardDAO dao = BoardDAO.getInstance();
		
			if (dao.insertBoard(brd)) {
			response.getWriter().print("success");
			} else {
			response.getWriter().print("fail");
		}

	} else if (job.equals("delete")) {
		Board brd = new Board();

		BoardDAO dao = BoardDAO.getInstance();
		int bno = brd.getBno();
		if (dao.delBoard(bno)) {
			response.getWriter().print("success");
		} else {
			response.getWriter().print("fail");
		}
	}

	}

}