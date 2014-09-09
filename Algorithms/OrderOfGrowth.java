public class OrderOfGrowth {
	public static void main(String[] args) {
		
		// Rank the following functions by order of growth.
		// lg(lgn), n^2, n!, e^n, n, 2^n, n(lg(n)), 1
		
		double[] ns = new double[] {10, 100};
		double sum = 0, average = 0;
		
		// lg(lgn)
		for(int i = 0; i < ns.length; i++) {
			double ans = Math.log(Math.log(ns[i]));
			sum += ans;
		}
		System.out.println("lg(lgn): " + (sum/ns.length));
		
		// n^2
		for(int i = 0; i < ns.length; i++) {
			double ans = Math.pow(ns[i],2);
			sum += ans;
		}
		System.out.println("n^2: " + (sum/ns.length));
		
		// n!
		for(int i = 0; i < ns.length; i++) {
			double ans = fact(ns[i]);
			sum += ans;
		}
		System.out.println("n!: " + (sum/ns.length));
		
		// e^n
		for(int i = 0; i < ns.length; i++) {
			double ans = Math.pow(Math.E, ns[i]);
			sum += ans;
		}
		System.out.println("e^n: " + (sum/ns.length));
		
		// n
		for(int i = 0; i < ns.length; i++) {
			double ans = ns[i];
			sum += ans;
		}
		System.out.println("n: " + (sum/ns.length));
		
		// 2^n
		for(int i = 0; i < ns.length; i++) {
			double ans = Math.pow(2,ns[i]);
			sum += ans;
		}
		System.out.println("2^n: " + (sum/ns.length));
	}
	
	// Factorial
	public static double fact (double n) {
		double fact = 1;
		for(int i = 1; i <= n; i++)
			fact *= i;
			
		return fact;
	}
}