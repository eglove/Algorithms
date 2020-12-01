public class AlgVAlg {
	public static void main(String[] args) {
		/* What is the smallest values of n such that an algorithm whose running
		 * time is 100n^2 runs faster than an algorithm whose running time is
		 * 2^n on the same machine?
		 */
		
		// alg1 = 100n^2, alg2 = 2^n
		double alg1 = 2, alg2 = 1;
		int n = 1;
		while (alg1 > alg2) {
			alg1 = 100 * Math.pow(n,2);
			alg2 = Math.pow(2,n);
			
			System.out.print("\nn: " + n + 
				"\nAlgorithm 1: " + time((int)alg1) +
				"\nAlgorithm 2: " + time((int)alg2));
			try {
				Thread.sleep(500);
			} catch (InterruptedException ex) {
				Thread.currentThread().interrupt();
			}
			
			n++;
		}
		
		// n-1 to correct for last iteration
		System.out.println("\n\n" + (n-1) + " is the smallest n.");
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