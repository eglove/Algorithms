public class ProblemOne {
	public static void main(String[] args) {
		
		/* For inputs of size n, insertion sort runs 8n^2 steps, while merge
		 * sort runs in 64nlgn steps. For which values does insertion sort beat
		 * merge sort?
		 */
		 
		double insertion = 1; // Assume insertion is faster at lower n's
		double merge = 2;
		int n = 2;
		while (insertion < merge) {
			insertion = 8 * Math.pow(n,2);
			merge = 64 * (n * (Math.log(n)/Math.log(2)));
			
			// Used to watch programs progress
			/*
			System.out.print("\nInsertion: " + time((int)insertion) +
				"\nMerge: " + time((int)merge) +
				"\nn: " + n);
			
			try {
				Thread.sleep(500);
			} catch (InterruptedException ex) {
				Thread.currentThread().interrupt();
			}
			*/
			
			n++;
		}
		
		// n - 1 corrects for last increment in loop
		System.out.println("Insertion sort is faster than merge sort for any integer n < " + (n - 1) + ".");
	}
	
	public static String time(int sec) {
		int min = 0; int hour = 0;
		String answer = "";
		if (sec < 60) {
			answer = sec + "s";
		} else if (sec < 3600) {
			min = (sec % 3600) / 60;
			sec = sec % 60;
			answer = min + "m " + sec + "s";
		} else {
			hour = sec / 3600;
			min = (sec % 3600) / 60;
			sec = sec % 60;
			answer = hour + "h " + min + "m " + sec + "s";
		}
		
		return answer;
	}
}