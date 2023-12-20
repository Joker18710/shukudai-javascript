package shukudai;

//鍵付き金庫の仕様
public class KeySafe {
	//フィールド
	public String name = "";
	public int stock = 0;

	//コンストラクタ
	public KeySafe(String name, int stock) {
		this.name = name;
		this.stock = stock;
	}

	//鍵を使って金庫を開く
	public static boolean open(int key) {
		return false;

	}

	//金庫を閉める
	public static boolean close(int key) {
		return false;
	}

	//普通の金庫の仕様を反映する
	//Deposit(money)
	public static void main(String[] args) {
		Deposit(1000);
	}

	//お金を預ける	
	public static void Deposit(int money) {
		//制限の付与
		if (money < 1000000) {
			System.out.println("お預け完了");

		}
		return;
	}

	//お金を引き出す
	public static void withdraw(int money) {

	}

	public void takeOrder(final int number) {
		System.out.println("商品名：" + this.name);
		System.out.println("注文数：" + number + "/在庫数："+this.stock);

		if (this.stock < number) {
			System.out.println(this.name + "は在庫不足です");
			return;
		}
		this.stock -= number;
		System.out.println(this.name + "残りの在庫は" + this.stock);
	}
}