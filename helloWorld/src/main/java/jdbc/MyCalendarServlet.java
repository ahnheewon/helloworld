package jdbc;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

/**
 * Servlet implementation class MyCalendarServlet
 */
@WebServlet("/myCalendar")
public class MyCalendarServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MyCalendarServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");
		
		MemberManage dao = MemberManage.getInstance();
		List<FullCalendar> list = dao.scheduleList();
		// [{},{},{}]
		JsonArray ary = new JsonArray();
		
		for (FullCalendar cal : list) {
			JsonObject obj = new JsonObject();
			obj.addProperty("title",cal.getTitle());
			obj.addProperty("start", cal.getStartDate());
			obj.addProperty("end", cal.getEndDate()); // 속성
			ary.add(obj);
		}

		Gson gson = new GsonBuilder().create(); // 인스턴스 하나 만들 때 create();
		
		String json = gson.toJson(ary); // gson이 갖고 있는 toJson() 메소드 쓰면 String 타입 json data 생성.
		response.getWriter().print(json); // 출력스트림으로 출력.
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		String job = request.getParameter("job"); // 삭제해야돼서 파라미터 하나 더 추가!
		
		if(job.equals("insert")) {
			
		FullCalendar full =  new FullCalendar();
		full.setTitle(request.getParameter("title"));
		full.setStartDate(request.getParameter("start"));
		full.setEndDate(request.getParameter("end"));
		MemberManage dao = MemberManage.getInstance();
		
			if (dao.insertCalendar(full)) {
			response.getWriter().print("success");
			} else {
			response.getWriter().print("fail");
			}
		
		} else if (job.equals("delete")) {
			
			FullCalendar full =  new FullCalendar();
			
			
			//삭제 처리.
		}

	}

}
