package shukudai;

public class Safe {
	//フィールド
	public String name = "";
	public int stock = 0;
	//コンストラクタ
	public Safe( String name, int stock) {
		this.name = name;
		this.stock = stock;
	}
	public static void main(String[] args) {
		Deposit(99);
	}
//お金を預ける	
public static void Deposit(int money) {
	//制限の付与

	if(money<10000) {
		System.out.println("お預け完了");
	}
	return;
}
//お金を引き出す
public static void withdraw(int money) {
	
}

public void takeOrder(final int number) {
	System.out.println("商品名：" + this.name);
	System.out.println("注文数：" + number + "/在庫数："+ this.stock);

	if (this.stock < number) {
		System.out.println(this.name + "は在庫不足です");
		return;
	}
	this.stock -= number;
	System.out.println(this.name + "残りの在庫は" + this.stock);
}
};

